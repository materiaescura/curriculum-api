import gitHubCurriculum from '../../utils/gitHubCurriculum'

const apiGetUser = async (req, res) => {

    const data = await gitHubCurriculum({
        username: 'materiaescura',
        hiddenRepositories:['materiaescura']
    })

    return res.json(data)
}

export default apiGetUser