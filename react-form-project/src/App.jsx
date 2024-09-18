
import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting},
  } = useForm();


  async function onSubmit(data) {
   // api call ko simulate karte he.
   await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("submitting the form",data);
    
  }


  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
        className={errors.firstName ? 'input-error': ""}
        {...register('firstName',
          { required: true,
           minLength:{value:3,message:'min len atleast 3'},
           maxLength:{value:8,message:'max len atleast 8'}})}/>
           {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}

      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input {...register('middleName',)}/>
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input {...register('lastName', { 
            pattern:{
              value:/^[A-Za-z]+$/i,
              message:"last name as is not as per the rules"
            }
            })}/>
            {errors.LastName && <p className="error-msg">{errors.LastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting" : "submit"}
      />
    </form>
  )
}

export default App
