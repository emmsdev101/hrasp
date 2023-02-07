import React from 'react'
import { Table } from 'react-bootstrap'

export default function EvaluationTable({data}) {
  return (
    <Table hover responsive>
        <thead>
            <tr>
            <th>Applicant Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Department Type</th>
            <th>Recommendation</th>
            <th>Remarks</th>
            <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {data.map((values, idx)=>(
                <tr key={idx} onClick = {()=>window.location.href = "../view-evaluation/"+values.id}>
                    <td>{values.applicant_name}</td>
                    <td>{values.title}</td>
                    <td>{values.department}</td>
                    <td>{values.departmentType}</td>
                    <td>{values.recommendation}</td>
                    <td>{values.remarks}</td>
                    <td>{values.total}</td>
                </tr>
            ))}
           
        </tbody>
    </Table>
  )
}
