import { useEffect, useState } from 'react';
import { Wrapper } from '../../styles/Layout'
import { Classes } from './styles'

interface iClasses {
  _id: string;
  className: string;
  classSummary: string;
}

export function ViewClasses(){

  const [classes, setClasses] = useState<iClasses[]>([]);

  useEffect(() => {
    const fetchForms = async () => {
      const response = await fetch('http://localhost:3000/getClasses');
      const data = await response.json();
      console.log(data.classes);
      setClasses(data.classes);
    };
    fetchForms();
    console.log(classes);
  }, []);

  return (
    <Classes>
      <Wrapper>
        <h1>Ver turmas</h1>
      </Wrapper>
    </Classes>
  )
}