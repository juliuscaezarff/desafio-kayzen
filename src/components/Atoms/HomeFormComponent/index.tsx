const HomeFormComponent = () => {
  return (
    <form className="w-full flex flex-col gap-4 bg-red-700 md:w-[593px] px-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-[10px]">
      <input
        className="h-[59px] p-[20px] md:w-[286px]"
        type="text"
        name="name"
        id="name"
        placeholder="Nome"
      />
      <input
        className="h-[59px]  p-[20px] md:w-[286px]"
        type="text"
        name="phone"
        id="phone"
        placeholder="Telefone"
      />
      </div>
      <input
        className="h-[59px]  p-[20px]"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <textarea
        className="h-[131px]  p-[20px]"
        name="message"
        id="message"
        placeholder="Mensagem"
      ></textarea>
    </form>
  )
}

export default HomeFormComponent
