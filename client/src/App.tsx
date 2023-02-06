
import React, {useState} from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/pages/main/Main';

const App = () => {
  const [isModalOpened, setModalOpened] = useState<boolean>(false);

    const handleOpenModal = () => {
      setModalOpened(true);
    }
    const closeModal = () => setModalOpened(false);

  return (
    <div className="">
      <Header
        handleOpenModal={handleOpenModal}
        closeModal={closeModal}
      />
      <Main
        modalOpened={isModalOpened}
        closeModal={closeModal}
      />
      
    </div>
  );
}

export default App;

