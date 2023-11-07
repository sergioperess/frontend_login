import { useState } from 'react';
import './App.css'
import { CreateModal } from './components/create-modal/create-modal';

function App() { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className='container'>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}  
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App