import {ProjectEnum} from "../enum/projectEnum";

export interface TechStackInterface {
    name: string
}

export interface ProjectInterface {
    uuid: string
    name: string
    tech_stack: TechStackInterface[]
    client: string
    deadline: string
    completion_date: string
    archive: boolean
    board_status: ProjectEnum
    user_id: string
}
