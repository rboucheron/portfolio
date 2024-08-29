const AdminHeader = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-2 w-full">
        <div className="text-2xl font-bold">Dashboard</div>
        <nav className="flex space-x-4">
          <a href="#profile" className="hover:text-gray-300">
            Profil
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Article
          </a>
          <a href="#messages" className="hover:text-gray-300">
            Message
          </a>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
