import axios, { AxiosError } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async (): Promise<void> => {
    try {
        const response = await axios.get<Todo>(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        console.log("Todo:", response.data);
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error message:", error.message);
        } else {
            console.log("Unexpected error:", error);
        }
    }
};

fetchData();
