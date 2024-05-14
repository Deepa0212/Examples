import react, { useEffect, useState } from 'react'
import axios from 'axios'

const ListCountries = () => {
    const [state, setState] = useState([])

    // API call
    useEffect(() => {
        let response = axios.get('https://restcountries.com/v3.1/all')
        .then(function (response) {
            // handle success
            setState(response.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }, [])

    return (
        <div><h4>List of Countries</h4>
            <table className='countries'>
                    {state.map(country => 
                        <tr key={country.id}>
                            <td style={{width: '50px', padding: '5px', border: '1px solid #000' }}><img src={country.flags.svg} width="20px" height="20px"/></td>
                            <td style={{width: '300px', padding: '5px', border: '1px solid #000' }}>{country.name.official}</td>
                            <td style={{width: '100px', padding: '5px', border: '1px solid #000' }}>{country.population}</td>
                            <td style={{width: '100px', padding: '5px', border: '1px solid #000' }}>{country.region}</td>
                            <td style={{width: '100px', padding: '5px', border: '1px solid #000' }}>{country.capital}</td>
                        </tr>
                    )}
            </table>
        </div>

    );
}

export default ListCountries;

