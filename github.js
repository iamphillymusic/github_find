class Github {
    constructor() {
        this.client_id = '8ec13b727210987a4ebd';
        this.client_secret = '40e9ac02284be9605b480d4397bdaf22fe580cf8';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_pages=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile,
            repos
        }
    }
}