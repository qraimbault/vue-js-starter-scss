import axios from 'axios';

import { APIConfig } from '@Config';

const api = axios.create(APIConfig);

export default api;
