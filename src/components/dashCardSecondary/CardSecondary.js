import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Col } from 'react-bootstrap'
import './style.css'
export default function CardSecondary({dashIcon, data}) {
  const title = data.title
  const footer = data.departmentType
  const department = data.department
  return (
    <Col sm={12} md={6} lg={4}>
            <div className="dashCard">
              <div className="cardMain">
                <h5><Badge bg='info'>{department}</Badge></h5>
                <p className="dashCardHeader">{title}</p>
                
                <div className="dashCardBody">
                  <p className="dashCount">{data.total_persons}</p>
                </div>
                <div className="dashCardFoot">
                  <p>{footer}</p>
                </div>
              </div>
              <div className="dashIconWrapper">
                  <FontAwesomeIcon
                    icon={dashIcon}
                    className="dashIcon"
                  ></FontAwesomeIcon>
                </div>
            </div>
          </Col>
  )
}
