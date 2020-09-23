const initialStateEmpty = [];

const initialStateFilled = {
	formValues: {},
	currentTask: {},
};

const taskInitialValues = [{
	"taskScore": 100,
	"title": "Task 2",
	"state": "closed",
	"author": "KatiaR",
	"description": "Task 2 description",
	"items": [
		{
			"id": "task-2-bp1",
			"title": "basic_p1",
			"category": "basic",
			"score": "10",
			"description": "basic_p1 - You need to do some things",
			"mentorCheck": true
		},
		{
			"id": "task-2-ep1",
			"title": "extra_p1",
			"category": "extra",
			"score": "30",
			"description": "extra_p1 - You need to do some things",
			"mentorCheck": true
		},
		{
			"id": "task-2-fp1",
			"title": "fines_p1",
			"category": "fines",
			"score": "10",
			"description": "fines_p1 - You need to do some things",
			"mentorCheck": true
		}
	],
	"taskId": "task-2",
	"id": "task-2"
}]

export {
	initialStateEmpty,
	taskInitialValues,
	initialStateFilled
};

