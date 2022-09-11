import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

export function JobItem({ isNew = false, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew} // se não for criar um novo, ficara so leitura, (se ja estiver sido criado)
        {...rest}
      />

      <button
        type="button"
        onClick={onClick} 
        className={isNew ? 'button-add' : 'button-delete'} 
      >
        { isNew ? <FiPlus /> : <FiX />} 
      </button>
  
    </Container>
  )
}


