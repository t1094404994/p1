module core {
	/**
	 *
	 * @author 
	 *
	 */
    export class NodeList {

        private m_list: core.Node[];

        public constructor(dataList: any[]) {
            this.m_list = [];
            if(dataList) {
                for(var i: number = 0,iLen: number = dataList.length;i < iLen;i++) {
                    var node: core.Node = new core.Node(dataList[i]);
                    this.m_list.push(node);
                }
            }
            var list: core.Node[] = this.m_list;
            for(var i: number = 0,iLen: number = list.length;i < iLen;i++) {
                var node: core.Node = list[i];
                if(i + 1 == iLen) {
                    node.nextNode = list[0];
                } else {
                    node.nextNode = list[i + 1];
                }
                if(i == 0) {
                    node.preNode = list[iLen - 1];
                } else {
                    node.preNode = list[i - 1];
                }
            }
        }

        public getLen(): number {
            return this.m_list.length;
        }

        public getFirst(): core.Node {
            return this.m_list[0];;
        }

        public getEnd(): core.Node {
            return this.m_list[this.m_list.length - 1];
        }

        public getNode(index: number): core.Node {
            return this.m_list[index];
        }
        
        public clear():void{
            this.m_list.length = 0;
        }
    }
}