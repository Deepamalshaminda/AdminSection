import Table from 'react-bootstrap/Table';

function AdminTable() {
  return (
    <Table striped>
      <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>URL</th>
            <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <td>3</td>
            <td>dytrjnk</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AdminTable;