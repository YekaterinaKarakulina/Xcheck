const tasks = [
	{
		"taskScore": 100,
		"title": "Task 1",
		"state": "draft",
		"author": "viktorsipach",
		"description": "Task 1 description",
		"items": [
			{
				"id": "task-1-bp1",
				"title": "basic_p1",
				"category": "basic",
				"score": "10",
				"description": "basic_p1 - You need to do some things",
				"mentorCheck": true
			},
			{
				"id": "task-1-bp2",
				"title": "basic_p2",
				"category": "basic",
				"score": "20",
				"description": "basic_p2 - You need to do some things",
				"mentorCheck": false
			},
			{
				"id": "task-1-ep1",
				"title": "extra_p1",
				"category": "extra",
				"score": "30",
				"description": "extra_p1 - You need to do some things",
				"mentorCheck": true
			},
			{
				"id": "task-1-ep2",
				"title": "extra_p2",
				"category": "extra",
				"score": "50",
				"description": "extra_p2 - You need to do some things",
				"mentorCheck": false
			},
			{
				"id": "task-1-fp1",
				"title": "fines_p1",
				"category": "fines",
				"score": "10",
				"description": "fines_p1 - You need to do some things",
				"mentorCheck": true
			},
			{
				"id": "task-1-fp2",
				"title": "fines_p2",
				"category": "fines",
				"score": "10",
				"description": "fines_p2 - You need to do some things",
				"mentorCheck": false
			}
		],
		"taskId": "task-1",
		"id": "task-1"
	},
	{
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
	},
	{
		"taskScore": 100,
		"title": "Task 3",
		"state": "open",
		"author": "YekaterinaKarakulina",
		"description": "Task 3 description",
		"items": [
			{
				"id": "task-3-bp1",
				"title": "basic_p1",
				"category": "basic",
				"score": "10",
				"description": "basic_p1 - You need to do some things",
				"mentorCheck": true
			},
			{
				"id": "task-3-ep1",
				"title": "extra_p1",
				"category": "extra",
				"score": "30",
				"description": "extra_p1 - You need to do some things",
				"mentorCheck": true
			},
			{
				"id": "task-3-fp1",
				"title": "fines_p1",
				"category": "fines",
				"score": "10",
				"description": "fines_p1 - You need to do some things",
				"mentorCheck": true
			}
		],
		"taskId": "task-3",
		"id": "task-3"
	}]

const columns = [
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: 'Author',
		dataIndex: 'author',
		key: 'author',
	},
	{
		title: 'Description',
		dataIndex: 'description',
		key: 'description',
	},
	{
		title: 'Status',
		key: 'state',
		dataIndex: 'state',
	},
	{
		title: 'Action',
		key: 'taskId',
	},
];

const task =
{
	"taskScore": 100,
	"title": "Task 1",
	"state": "draft",
	"author": "viktorsipach",
	"description": "Task 1 description",
	"items": [
		{
			"id": "task-1-bp11",
			"title": "basic_p1",
			"category": "basic",
			"score": "10",
			"description": "basic_p1 - You need to do some things",
			"mentorCheck": true
		},
		{
			"id": "task-1-bp21",
			"title": "basic_p2",
			"category": "basic",
			"score": "20",
			"description": "basic_p2 - You need to do some things",
			"mentorCheck": false
		},
		{
			"id": "task-1-ep11",
			"title": "extra_p1",
			"category": "extra",
			"score": "30",
			"description": "extra_p1 - You need to do some things",
			"mentorCheck": true
		},
		{
			"id": "task-1-ep21",
			"title": "extra_p2",
			"category": "extra",
			"score": "50",
			"description": "extra_p2 - You need to do some things",
			"mentorCheck": false
		},
		{
			"id": "task-1-fp11",
			"title": "fines_p1",
			"category": "fines",
			"score": "10",
			"description": "fines_p1 - You need to do some things",
			"mentorCheck": true
		},
		{
			"id": "task-1-fp21",
			"title": "fines_p2",
			"category": "fines",
			"score": "10",
			"description": "fines_p2 - You need to do some things",
			"mentorCheck": false
		}
	],
	"taskId": "task-11",
	"id": "task-11"
};

export { tasks, columns, task };