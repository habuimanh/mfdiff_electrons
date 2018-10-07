import { IList } from "mendixmodelsdk"
import diff = require("../DiffInterface");
import * as $ from "./"

export interface IParameterMapping {
    id: string,
    type?: string
    value?: string,
    name: string
}

export function compareTwoParametersById(first: IParameterMapping, second: IParameterMapping): number {
    if (first.id > second.id) return 1
    if (first.id === second.id) return 0
    return -1
}

export function loadParameterDiff(object1: IParameterMapping, object2: IParameterMapping): diff.IParameterMappingDiff {
    return $.loadToIBasicDiff(object1, object2)
}

export function loadParameter(object: IParameterMapping): diff.IParameterMapping {
    return {
        id: object.id,
        value: object.value,
        name: object.name,
        type: object.type ? object.type : undefined
    }
}

export function loadParameterList(list: IList<IParameterMapping> | IParameterMapping[]): diff.IParameterMapping[] {
    return list.map(element => loadParameter(element))
}