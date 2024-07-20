import React from 'react';
import Header from './components/Header'; // Исправлено: Header вместо Hader
import Home from './components/Home'; // Исправлено: Home вместо home
import PersonClass from './components/PersonClass'; 
import Person from './components/Person'; 

function App() {
  return (
    <div>
      <Header />
      <Home />
      <section>
        <h2> Person</h2>
        <Person name="John" surname="Doe" age={30} />
        <Person name="Jane" surname="Smith" age={25} />
        <Person name="Alice" surname="Johnson" age={28} />
      </section>
      <section>
        <h2>PersonClass</h2>
        <PersonClass name="Michael" surname="Brown" age={35} />
        <PersonClass name="Emily" surname="Davis" age={32} />
        <PersonClass name="David" surname="Wilson" age={29} />
      </section>
    </div>
  );
};

export default App;
