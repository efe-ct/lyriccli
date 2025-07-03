#!/usr/bin/env node //To those who don't know this is a hashbang or as google said aka shebang Tells my computer how to run the file(which interpreter to use)
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
const token = process.env.GENIUS_CLIENT_ACCESS_TOKEN;
console.log("Genius account token", token)