
import  Background from '../assets/images/ranch.jpg'

function home() {
  return (
    <div style={{backgroundImage: `url(${Background})`}} 
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
      >
        <div className = 'flex place-items-center h-screen'>
            <h3 className='p-5 bg-grey bg-opacity-20 text-black rounded'>Welcome to Phonebook</h3>
        </div>
    </div> 
  )
}

export default home
