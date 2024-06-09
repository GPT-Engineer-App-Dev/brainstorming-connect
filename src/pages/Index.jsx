import React, { useState } from 'react';
import { Container, Button, VStack } from "@chakra-ui/react";
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Start Node' }, position: { x: 250, y: 5 } },
];

const Index = () => {
  const [elements, setElements] = useState(initialElements);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);

  const addNode = () => {
    const newNode = {
      id: (elements.length + 1).toString(),
      data: { label: `Node ${elements.length + 1}` },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setElements((els) => els.concat(newNode));
  };

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Button onClick={addNode} colorScheme="teal">Add Node</Button>
        <div style={{ height: 500, width: '100%' }}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onLoad={onLoad}
            style={{ width: '100%', height: '100%' }}
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
      </VStack>
    </Container>
  );
};

export default Index;