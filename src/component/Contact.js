

function Contact() {
  return (
    <div className="p-4 m-4">
      <h1 className="text-3xl font-bold">Contact us</h1>
      <form>
        <input placeholder="name" type="text" className="border border-black p-2 m-2"/>
        <input placeholder="email" type="email" className="border border-black p-2 m-2" />
        <button className="border border-black p-2 m-2 bg-gray-300">Submit</button>
      </form>
    </div>
  )
}

export default Contact