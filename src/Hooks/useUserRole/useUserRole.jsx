import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

const useUserRole = () => {
  const { user, loadingAuth } = useContext(AuthContext); // fixed: useContext instead of use()
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (user?.email) {
        try {
          const encodedEmail = encodeURIComponent(user.email); // encode @ to %40
          const res = await axios.get(
            `https://seerah-data.vercel.app/users/email/${encodedEmail}`
          );
          setRole(res.data.role || "user"); // fallback to "user"
        } catch (err) {
          console.error("Error fetching user role:", err);
          setRole("user");
        } finally {
          setLoading(false);
        }
      } else {
        setRole(null);
        setLoading(false);
      }
    };

    if (!loadingAuth) fetchRole();
  }, [user, loadingAuth]);

  return { role, loading, user };
};

export default useUserRole;
