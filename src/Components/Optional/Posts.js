import React from "react";
import { Table } from "react-bootstrap";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading . . .</h2>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>12</th>
          <th>13</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.name}</td> {/* post.title */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Posts;
