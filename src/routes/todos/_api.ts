import type { RequestEvent } from "@sveltejs/kit";

let todos: Todo[] = [];

export const api = (request: RequestEvent, todo?: Todo) => {
  let body = {};
  let status = 500;

  switch (request.request.method.toUpperCase()) {
    case "GET":
      body = todos;
      status = 200;
      break;
    case "POST":
      todos.push(todo);
      body = todo;
      status = 201;
    case "DELETE":
      todos = todos.filter((todo) => todo.uid !== request.params.uid);
      status = 200;
      break;
    default:
      break;
  }

  if (request.request.method.toUpperCase() !== "GET") {
    return {
      status: 303,
      headers: {
        location: "/",
      },
    };
  }

  return {
    status,
    body,
  };
}; 