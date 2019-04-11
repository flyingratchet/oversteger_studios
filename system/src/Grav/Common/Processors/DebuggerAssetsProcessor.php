<?php

/**
 * @package    Grav\Common\Processors
 *
 * @copyright  Copyright (C) 2015 - 2019 Trilby Media, LLC. All rights reserved.
 * @license    MIT License; see LICENSE file for details.
 */

namespace Grav\Common\Processors;

use Grav\Framework\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class DebuggerAssetsProcessor extends ProcessorBase
{
    public $id = 'debugger_assets';
    public $title = 'Debugger Assets';

    public function process(ServerRequestInterface $request = null, RequestHandlerInterface $handler = null) : ResponseInterface
    {
        // Backwards compatibility
        if (is_null($request) && is_null($handler)) {
            $this->container['debugger']->addAssets();
            return new Response();
        }

        $this->startTimer();
        $this->container['debugger']->addAssets();
        $this->stopTimer();

        return $handler->handle($request);

    }
}
