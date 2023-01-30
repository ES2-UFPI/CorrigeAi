interface Props {
  typeAvaliation : string
  selectValue: string
}

export function FormAvaliation( {typeAvaliation, selectValue} : Props) {
  return (
    <>
      {
        selectValue === 'empty' ? null : 
          typeAvaliation === 'exam' ? <h1>Emitindo form de prova</h1> : <h1>Emitindo form de tarefa </h1> 
      } 
    </>
  )
}