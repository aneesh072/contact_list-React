import './App.css';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div>
      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="Enis Karki"
        email="aneeshkarki@yahoo.com"
        age={24}
      />
      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="David Guatta"
        email="david.guetta@yahoo.com"
        age={36}
      />
      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="Post Malone"
        email="p.malon@hotmail.com"
        age={30}
      />
    </div>
  );
}

export default App;
