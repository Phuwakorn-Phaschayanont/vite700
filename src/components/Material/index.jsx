import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Material = ({icon, link}) => {
    return(
            <a href={link} target="_blank" className= 'hover:scale-110  hover:text-primaryTitle'><FontAwesomeIcon icon={icon}/></a>
    )
}

export default Material;