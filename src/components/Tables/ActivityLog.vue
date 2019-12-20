<template>
    <div>
        <md-table v-model="users">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="User">{{ item.user }}</md-table-cell>
                <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
                <md-table-cell md-label="Active Page">{{ item.page }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    export default {
        name: "ActivityLog",
        data() {
            return {
                selected: [],
                users: [
                    {
                        user: "Dakota Rice",
                        date: "19/12/2019",
                        page: 'demo.com'
                    },
                    {
                        user: "Minerva Hooper",
                        date: "19/12/2019",
                        page: 'demo.com'
                    },
                    {
                        user: "Sage Rodriguez",
                        date: "19/12/2019",
                        page: 'demo.com'
                    }
                ]
            };
        }
    }
</script>

<style scoped>

</style>