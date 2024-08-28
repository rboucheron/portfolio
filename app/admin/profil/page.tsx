"use client";
import { useMemo, useState } from "react";
import Popups, {
  BodyPopups,
  HeaderPopups,
  FooterPopups,
} from "@/components/Poppup";
import Input from "@/components/Input";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Result } from "postcss";

//example data type
type Person = {
  id: number;
  email: string;
  name: string;
};

const data: Person[] = [
  {
    id: 12345,
    name: "raphael boucheron",
    email: "raphaelboucheron3@gmail.com",
  },
];

const Profil = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <div className="m-4">
      {isOpen && <AddAdmin />}
      <button
        className="bg-sky-400 p-2 rounded-md text-sm text-white mb-4 mt-4 hover:bg-sky-800"
        onClick={() => setIsOpen(true)}
      >
        Add Profil
      </button>
      <MaterialReactTable table={table} />
    </div>
  );
};

const AddAdmin: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/admin/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("Admin ajouté avec succès!");
        setName("");
        setEmail("");
        setPassword("");
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
          onClick={() => setMessage(null)}
        >
          Annuler
        </button>
        <button
        onClick={() => handleSubmit}
          className="bg-green-400 p-2 rounded-md text-sm text-white mb-4 mt-4 hover:bg-sky-800"
        >
          Valider
        </button>
      </FooterPopups>
    </Popups>
  );
};

export default Profil;
