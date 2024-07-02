import { useState } from "react";





function Form() {
/*   const [name, setName] = useState(""); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); */


  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: ''
  })
/* 
  const handleName = (e) => { 
    // console.log(e.target.value);
    setName(e.target.value)
  }
  const handleEmail = (e) => { 
    // console.log(e.target.value);
    setEmail(e.target.value)
  }
  const handlePassword = (e) => { 
    console.log(e.target.value);
    setPassword(e.target.value)
  }
*/

  const handleInput = (e) => { 
    const {name, value} = e.target; 

    setFormData({ 
      ...formData, 
      [name]:value
    })
    console.log(formData)
      console.log(e.target.name)
  }
  const handleSubmit = (e) => { 
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="flex-col justify-evenly	 bg-slate-400">
      <h1 className="">Form</h1>
      <label >
        name :
        <input className="mx-9  outline" type="text" name="name" value={formData.name} onChange={handleInput} />
      </label>
      <br />
      <label htmlFor="">
        Email :
        <input className="mx-10 my-4 outline" type="email" name="email"  value={formData.email} onChange={handleInput} />
      </label>
      <br />
      <label >
        Password :
        <input className="mx-10 my-4 outline" type="password" name="password"  value={formData.password} onChange={handleInput} />
      </label>
      <br />
        <button type="submit" className="outline p-3 my-10 mx-40">Submit  </button>
    </form>
  );
}

export default Form;
