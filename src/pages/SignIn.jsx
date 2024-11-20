// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// const SignIn = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Handle sign-in (sign-up process or redirect to login page)
//   const handleButtonClick = async () => {
//     console.log("Username:", username, "Password:", password); // Debugging statement

//     if (username && password) {
//       // If both username and password are entered, attempt to sign-up
//       const res = await fetch("http://localhost:5000/api/sign-up", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       if (res.ok) {
//         const result = await res.json();
//         console.log(result); // Log the response for debugging

//         // Redirect to login page immediately after successful sign-in
//         navigate("/login"); // Redirect to the login page
//       } else {
//         const errorText = await res.text();
//         // Handle failure to sign in (e.g., show an error message or log)
//         console.error("Failed to sign in. Please try again.");
//       }
//     } else {
//       // If no username/password entered, just redirect to the login page
//       console.log("Navigating to login page...");
//       navigate("/login");
//     }
//   };

//   const styles = {
//     container: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "20px",
//       maxWidth: "400px",
//       margin: "0 auto",
//       backgroundColor: "#f4f4f4",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     heading: {
//       color: "#271776",
//       marginBottom: "20px",
//     },
//     input: {
//       padding: "10px",
//       fontSize: "16px",
//       marginBottom: "15px",
//       border: "1px solid #ddd",
//       borderRadius: "4px",
//       outline: "none",
//       width: "100%",
//     },
//     button: {
//       padding: "10px 20px",
//       backgroundColor: "#271776",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       width: "100%",
//     },
//     buttonHover: {
//       backgroundColor: "#4c349e",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Sign In</h1>
//       <input
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//         style={styles.input}
//       />
//       <input
//         placeholder="Password"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         style={styles.input}
//       />
      
//       {/* Single Button for both Sign-Up and Navigation to Login */}
//       <button
//         onClick={handleButtonClick}
//         style={styles.button}
//         onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
//         onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
//       >
//         Sign In / Go to Login
//       </button>
//     </div>
//   );
// };

// export default SignIn;

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle sign-in (sign-up process or redirect to login page)
  const handleButtonClick = async () => {
    console.log("Username:", username, "Password:", password); // Debugging statement

    if (username && password) {
      // If both username and password are entered, attempt to sign-up
      const res = await fetch("http://localhost:5000/api/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const result = await res.json();
        console.log(result); // Log the response for debugging

        // Show a success popup
        alert("Successfully signed in!");

        // Redirect to the login page immediately after the popup
        navigate("/login");
      } else {
        const errorText = await res.text();
        // Handle failure to sign in (e.g., show an error message or log)
        alert("Successfully sign in");
        console.error("API Error:", errorText);
      }
    } else {
      // If no username/password entered, show an error message
      alert("Please enter a username and password.");
      console.log("Navigating to login page...");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      maxWidth: "400px",
      margin: "0 auto",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      color: "#271776",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      outline: "none",
      width: "100%",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#271776",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      width: "100%",
    },
    buttonHover: {
      backgroundColor: "#4c349e",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Sign In</h1>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      
      {/* Single Button for both Sign-Up and Navigation to Login */}
      <button
        onClick={handleButtonClick}
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Sign In / Go to Login
      </button>
    </div>
  );
};

export default SignIn;
