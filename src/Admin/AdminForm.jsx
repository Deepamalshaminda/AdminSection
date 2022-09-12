import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminForm() {
  return (
    <Form>
      <Table>
        <tr>
          <Form.Group className="mb-3" controlId="title">
            <td>
              <Form.Label>Title</Form.Label>
            </td>
            <td>
              <Form.Control type="text" placeholder="Enter title" />
            </td>
          </Form.Group>
        </tr>

        <tr>
          <Form.Group className="mb-3" controlId="description">
            <td>
              <Form.Label>Description</Form.Label>
            </td>
            <td>
              <Form.Control type="text" placeholder="Description" />
            </td>
          </Form.Group>
        </tr>

        <tr>
          <Form.Group className="mb-3" controlId="url">
            <td>
              <Form.Label>URL</Form.Label>
            </td>
            <td>
              <Form.Control type="email" placeholder="Enter URL" />
            </td>
          </Form.Group>
        </tr>

        <tr>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </tr>

      </Table>

    </Form>
  );
}

export default AdminForm;