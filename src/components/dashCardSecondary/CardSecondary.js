import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col } from 'react-bootstrap'
import './style.css'
export default function CardSecondary({dashIcon, title, body, footer}) {
  return (
    <Col sm={12} md={6} lg={4}>
            <div className="dashCard">
              <div className="cardMain">
                <p className="dashCardHeader">{title}</p>
                <div className="dashCardBody">
                  <p className="dashCount">{body}</p>
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
