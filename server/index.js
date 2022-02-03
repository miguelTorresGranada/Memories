import express from 'express';
import bodyParse from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({ limit: "30mb", exteded: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", exteded: true}));
app.use(cors());