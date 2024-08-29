"use client";
import { useMemo, useState, useEffect } from "react";
import Popups, {
  BodyPopups,
  HeaderPopups,
  FooterPopups,
} from "@/components/Poppup";
import Input from "@/components/Input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import AdminHeader from "@/components/AdminHeader";

type Person = {
  id: number;
  email: string;
  name: string;
};

const Profil = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [adminData, setAdminData] = useState<Person[] | null>(null);

  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAdminData(data.admins);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.log("Erreur :", error);
    }
  };

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: adminData !== null ? adminData : [],
  });

  return (
    <>
      {isOpen && <AddAdmin isOpen={(isOpen: boolean) => setIsOpen(isOpen)} />}
      <AdminHeader />
      <div className="m-4">
        <div className="flex justify-between  items-center ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Admin</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Profil</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <button
            className="bg-sky-400 p-2 rounded-md text-sm text-white mb-4 mt-4 hover:bg-sky-800"
            onClick={() => setIsOpen(true)}
          >
            Add Profil
          </button>
        </div>
        <MaterialReactTable table={table} />
      </div>
    </>
  );
};

const AddAdmin = ({ isOpen }: { isOpen: (isOpen: boolean) => void }) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setMessage("Admin ajouté avec succès!");
        setName("");
        setEmail("");
        setPassword("");
        isOpen(false);
      } else {
        const errorData = await response.json();
        setMessage(`Erreur: ${errorData.error}`);
      }
    } catch (error) {
      setMessage(`Erreur: ${error}`);
    }
  };

  return (
    <Popups>
      <HeaderPopups>
        <>Ajout d'un admin</>
      </HeaderPopups>
      <BodyPopups>
        <form>
          <Input
            label="Nom"
            type="text"
            result={(result: string) => setName(result)}
            placeHolder="Raphaël Boucheron"
          />
          <Input
            label="Email"
            type="email"
            result={(result: string) => setEmail(result)}
            placeHolder="raphaelboucheron@gmail.com"
          />
          <Input
            label="Mot de passe"
            type="password"
            placeHolder="*****"
            result={(result: string) => setPassword(result)}
          />
        </form>
        {message && <div className="mt-4 text-red-500">{message}</div>}
      </BodyPopups>
      <FooterPopups>
        <button
          type="button"
          className="bg-red-400 p-2 rounded-md text-sm text-white mb-4 mt-4 hover:bg-sky-800"
          onClick={() => isOpen(false)}
        >
          Annuler
        </button>
        <div
          onClick={handleSubmit} // <-- ici, il faut appeler directement la fonction
          className="bg-green-400 p-2 rounded-md text-sm text-white mb-4 mt-4 hover:bg-sky-800"
        >
          Valider
        </div>
      </FooterPopups>
    </Popups>
  );
};

export default Profil;
