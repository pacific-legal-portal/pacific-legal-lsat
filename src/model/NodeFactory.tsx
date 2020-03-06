
import {SingleSelectQuestion, MultiSelectQuestion, AutoPlayMessage, NodeType, Node, Trigger} from './index'
import {NodeData} from './Node'
import {TriggerFactory} from './Trigger'
import {ConditionFactory} from './Condition'

export class NodeFactory {
    static createNodeFromData(data: NodeData): Node|never {
        let { type, content, optionsData, triggersData, extraInfo } = data 
        // const triggers: Trigger[] = TriggerFactory.createTriggersFromData()
        // const options: Option[] = OptionFactory.createOptionsFromData()
        if (type == NodeType.singleSelect){
            // return new SingleSelectQuestion(
            //     content, options, triggers, extraInfo
            // )
        }
        else if (type == NodeType.multiSelect){
            // return new MultiSelectQuestion(
            //     content, options, triggers, extraInfo
            // )
        } else if (type == NodeType.autoPlayMessage){
            // return new AutoPlayMessage(
            //     content, options, triggers, extraInfo
            // )
        }
        throw new Error();       
    }
}
