import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const notifyFailed = () => toast("Registration Error");
const notifyNoSuchUser = () => toast("No Such User");