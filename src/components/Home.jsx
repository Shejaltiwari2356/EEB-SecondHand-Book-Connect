import React, { useState } from "react"; // Import useState from React
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Home = () => {
  const studentsData = [
    {
      name: "John Doe",
      year: 1,
      branch: "Computer Science",
      book: "Introduction to Algorithms",
      price: 1000,
      contact: "123-456-7890",
      description:
        "A comprehensive introduction to algorithms and data structures.",
      image: "https://covers.openlibrary.org/b/id/7419116-L.jpg",
    },
    {
      name: "Alice Brown",
      year: 1,
      branch: "Computer Science",
      book: "Learning Python",
      price: 900,
      contact: "111-222-3333",
      description: "An in-depth guide to Python programming language.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcfULZzLkmKgQ1nMQWUcdDM3Vu4U7aIlbMA&s",
    },
    {
      name: "Michael Green",
      year: 1,
      branch: "Computer Science",
      book: "Computer Networking",
      price: 850,
      contact: "444-555-6666",
      description: "A detailed overview of computer networking fundamentals.",
      image: "https://covers.openlibrary.org/b/id/7927945-L.jpg",
    },
    {
      name: "Jane Smith",
      year: 2,
      branch: "Mechanical Engineering",
      book: "Thermodynamics",
      price: 750,
      contact: "234-567-8901",
      description:
        "A thorough introduction to the principles of thermodynamics.",
      image: "https://covers.openlibrary.org/b/id/10155657-L.jpg",
    },
    {
      name: "David Wilson",
      year: 2,
      branch: "Mechanical Engineering",
      book: "Fluid Mechanics",
      price: 800,
      contact: "777-888-9999",
      description:
        "An essential guide to fluid mechanics concepts and applications.",
      image: "https://covers.openlibrary.org/b/id/9671633-L.jpg",
    },
    {
      name: "Emily Johnson",
      year: 2,
      branch: "Mechanical Engineering",
      book: "Materials Science",
      price: 780,
      contact: "333-444-5555",
      description:
        "An overview of the properties and applications of engineering materials.",
      image: "https://covers.openlibrary.org/b/id/8104472-L.jpg",
    },
    {
      name: "Mike Johnson",
      year: 3,
      branch: "Civil Engineering",
      contact: "345-678-9012",
      book: "Structural Analysis",
      price: 850,

      description: "An essential guide to analyzing and designing structures.",
      image: "https://covers.openlibrary.org/b/id/6585771-L.jpg",
    },
    {
      name: "Sophia Brown",
      year: 3,
      branch: "Civil Engineering",
      contact: "555-666-7777",
      book: "Concrete Technology",
      price: 800,

      description:
        "A comprehensive look at the properties and applications of concrete.",
      image: "https://covers.openlibrary.org/b/id/6852317-L.jpg",
    },
    {
      name: "Chris Evans",
      year: 3,
      branch: "Civil Engineering",
      contact: "555-666-7777",
      book: "Geotechnical Engineering",
      price: 820,

      description:
        "An introduction to geotechnical engineering principles and practices.",
      image: "https://covers.openlibrary.org/b/id/8198501-L.jpg",
    },
    {
      name: "Sara Wilson",
      year: 4,
      branch: "Electrical Engineering",
      book: "Power Systems",
      price: 950,
      contact: "456-789-0123",
      description:
        "An extensive guide to electrical power systems and their components.",
      image: "https://covers.openlibrary.org/b/id/8206099-L.jpg",
    },
    {
      name: "Daniel Kim",
      year: 4,
      branch: "Electrical Engineering",
      book: "Digital Signal Processing",
      price: 900,
      contact: "888-999-0000",
      description:
        "A comprehensive overview of digital signal processing techniques.",
      image: "https://covers.openlibrary.org/b/id/8342595-L.jpg",
    },
    {
      name: "Olivia Lee",
      year: 4,
      branch: "Electrical Engineering",
      book: "Control Systems",
      price: 920,
      contact: "101-202-3030",
      description: "An introduction to control system theory and applications.",
      image: "https://covers.openlibrary.org/b/id/6821410-L.jpg",
    },
    {
      name: "James Smith",
      year: 4,
      branch: "Electrical Engineering",
      book: "Electromagnetics",
      price: 940,
      contact: "404-505-6060",
      description:
        "A detailed study of electromagnetics and its applications in engineering.",
      image: "https://covers.openlibrary.org/b/id/6205543-L.jpg",
    },
  ];
  const [selectedYear, setSelectedYear] = useState(1);
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const filteredStudents = studentsData.filter(
    (student) => student.year === selectedYear
  );

  const handleCheckout = (student) => {
    // Navigate to CheckOut component and pass the student data
    navigate("/checkout", { state: { student } });
  };

  const handleSellBooks = () => {
    // Navigate to the SellBooks component
    navigate("/sell");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h3>Filter by Year</h3>
        <select
          onChange={handleYearChange}
          value={selectedYear}
          style={{ padding: "5px", width: "100%" }}
        >
          <option value={1}>1st Year Students</option>
          <option value={2}>2nd Year Students</option>
          <option value={3}>3rd Year Students</option>
          <option value={4}>4th Year Students</option>
        </select>

        {/* Sell Your Books Button */}
        <button
          onClick={handleSellBooks}
          style={{
            marginTop: "20px",
            padding: "10px",
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sell your books
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Students List - {selectedYear} Year</h1>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Year</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Branch
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Contact no.
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Book</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Price (₹)
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Checkout
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {student.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {student.year}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {student.branch}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {student.contact}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {student.book}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {student.price}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button onClick={() => handleCheckout(student)}>
                    See Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
