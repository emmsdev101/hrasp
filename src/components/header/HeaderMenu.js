import { faAngleRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"
import './hiddenMenu.css'
import './header.css'
export const HeaderMenu = ({handleClose, items, footers}) => {
    return(
      <div className="hiddenMenuWrapper">
        <div onClick={handleClose} className = "hiddenMenuClose"></div>
          <FontAwesomeIcon icon={faTimes} size="xl" className="m-2" color = "white"/>
          <div className="p-2 hiddenMenu d-flex align-items-center justify-content-between flex-column">
            <div className="w-100 pt-3 d-flex align-items-center flex-column">
              {items.map((item, idx)=>(
                <div key = {idx} className="menuItem d-flex justify-content-between align-items-center"
                onClick={item.action}>
                <p>{item.label}</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              ))}
             
            </div>
            <div className="w-100 d-grid gap-2">
              {footers.map((item, idx)=>(
                <Button key={idx} variant={item.variant} onClick={item.action}>{item.label}</Button>
              ))}
            </div>
          </div>
        </div>
    )
  }