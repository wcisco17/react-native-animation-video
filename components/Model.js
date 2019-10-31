import { stringLiteral, numericLiteral } from "@babel/types"

export const AppModel = {
    id: numericLiteral(),
    name: stringLiteral(),
    views: stringLiteral(),
    businessTitle: stringLiteral(),
    location: stringLiteral(),
    source: stringLiteral(),
    videoUrl: stringLiteral()
}

export const Apps = Array(AppModel)

export const Position = {
    x: numericLiteral(),
    y: numericLiteral(),
    width: numericLiteral(),
    height: numericLiteral()
}