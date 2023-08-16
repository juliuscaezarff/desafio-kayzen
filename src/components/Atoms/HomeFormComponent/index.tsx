const HomeFormComponent = () => {
  return (
    <form className="w-full max-w-[360px] flex flex-col gap-4 mt-[60px] ">
      <input
        className="h-[59px] p-[20px]"
        type="text"
        name="name"
        id="name"
        placeholder="Nome"
      />
      <input
        className="h-[59px]  p-[20px]"
        type="text"
        name="phone"
        id="phone"
        placeholder="Telefone"
      />
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
