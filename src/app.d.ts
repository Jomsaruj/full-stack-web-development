/// <reference types="@sveltejs/kit" />

type Todo = {
	uid: string,
	created_at: Date;
	text: string;
	done: boolean;
} 

declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
