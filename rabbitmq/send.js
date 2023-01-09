import { connect } from "amqplib";

const connection = await connect("amqp://localhost");

const channel = await connection.createChannel();

await channel.assertQueue("hello", { durable: false });

channel.sendToQueue(queue, Buffer.from("Hello World!"));
