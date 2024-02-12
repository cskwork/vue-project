import PostRepository from '@/api/PostRepository';
import UserRepository from '@/api/UserRepository';

const repositories = {
    'posts': PostRepository,
    'users': UserRepository
}
export default {
    get: name => repositories[name]
};