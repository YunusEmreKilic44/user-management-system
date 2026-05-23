import "./Home.css";

const Home = () => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Emin</td>
            <td>emin@gmail.com</td>
            <td>Turkey</td>
            <td>5555555555</td>
            <td>
              <div className="buttons">
                <button className="btn btn-primary">View</button>
                <button className="btn btn-success">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
