import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Assuming you have a way to get the token, for example from context or props
const useGetConversations = (token) => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch('http://localhost:8000/users', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						"Authorization": `Bearer ${token}`,
						'Access-Control-Allow-Credentials': true,
						'Access-Control-Allow-Headers': 'pm-u, pm-h0, pm-h1, pm-h3, pm-o0, pm-o1, pm-o2, pm-o3, authorization',
						'Access-Control-Allow-Methods': 'POST',
						'Access-Control-Allow-Origin': 'http://localhost:8000',
						'ACCESS-CONTROL-MAX-AGE': 3600,
						'referrer-policy': 'no-referrer-when-downgrade'
					},
				});

				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (error) {
				console.log("frontend error", error.message);
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (token) {
			getConversations();
		}
	}, [token]);

	return { loading, conversations };
};

export default useGetConversations

// lets check

