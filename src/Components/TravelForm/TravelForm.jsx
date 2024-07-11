
import './travelForm.css'

const TravelForm = () => {
        return(
<section className='formulario'>
<form >
            <h1>Formulário de Viagem</h1>
            <div className='campos'>
            <div>
                <label htmlFor="destination">Origem:</label>
                <input 
                    type="text" 
                    id="destination" 
                    name="destination" 
                    
                    required 
                />
            </div>

            <div>
                <label htmlFor="destination">Destino:</label>
                <input 
                    type="text" 
                    id="destination" 
                    name="destination" 
                    
                    required 
                />
            </div>

            <div>
                <label className='label-data' htmlFor="departureDate">Data de Ida:</label>
                <input 
                    type="date" 
                    id="departureDate" 
                    name="departureDate" 
                    
                    required 
                />
            </div>
            <div>
                <label className='label-data' htmlFor="returnDate">Data de Volta:</label>
                <input 
                    type="date" 
                    id="returnDate" 
                    name="returnDate" 

                    required 
                />
            </div>
            
            <button className="botao"type="submit">Consultar</button>
            </div>
        </form>
        

    </section>
        )
    };

    
export default TravelForm;