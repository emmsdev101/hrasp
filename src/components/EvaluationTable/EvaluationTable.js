import React from 'react'
import { Table } from 'react-bootstrap'

export default function EvaluationTable({data,panel, details}) {
  return (
    <Table hover responsive>
        <thead>
            {details?(
                <tr>
            <th>Evaluator</th>
            <th>Recommendationn</th>
            <th>Remarks</th>
            <th>Score</th>
            </tr>
            ):
            (
                <tr>
            <th>Rank</th>
            <th>Applicant Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Department Type</th>
            {panel?(<th>Recommendationn</th>):""}
            {panel?(<th>Remarks</th>):""}
            <th>Score</th>
            </tr>
            )}
        </thead>
        <tbody>
            {data.map((values, idx)=>(
                <tr key={idx} onClick = {()=>window.location.href = "../view-evaluation/"+values.id}>
                    <th>{idx+1}</th>
                    <td>{values.applicant_name}</td>
                    <td>{values.title}</td>
                    <td>{values.department}</td>
                    <td>{values.departmentType}</td>
                    {panel?( <td>{values.recommendation}</td>):""}
                    {panel? (<td>{values.remarks}</td>):""}
                    <td>{values.total}</td>
                </tr>
            ))}
           
        </tbody>
    </Table>
  )
}
