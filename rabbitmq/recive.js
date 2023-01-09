import { connect } from "amqplib";

const connection = await connect("amqp://localhost");

const channel = await connection.createChannel();

await channel.assertQueue("hello", { durable: false });

channel.consume(
  "hello",
  (message) => {
    console.log(" [x] Received %s", message.content.toString());
  },
  { noAck: true }
);
