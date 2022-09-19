<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CollectedItem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    /**
     * @OA\Get(
     *   path="/api/users",
     *   tags={"Users"},
     *   summary="All users",
     *   security={{"sanctum":{}}},
     *   @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *           @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *      ),
     *    @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *    @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *    @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *    @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *
     * ),
     */
    public function getUsers(){
        $users=User::all();
        return Response::json(['users'=>$users,'status'=>200],200);
    }

    /**
     * @OA\Get(
     *   path="/api/user/show/{id}",
     *   tags={"Users"},
     *   summary="user Detail",
     *   security={{"sanctum":{}}},
     *   @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function show($id){
        $user = User::find($id);
        return Response::json(['user' => $user, 'status' => 200], 200);
    }

    /**
     * @OA\Get(
     *   path="/api/collectors",
     *   tags={"Users"},
     *   summary="All collectors",
     *   security={{"sanctum":{}}},
     *   @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *           @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *      ),
     *    @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *    @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *    @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *    @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *
     * ),
     */
    public function collectors(){
        $collectors=User::where('iscollector',true)->with('materials.store')->get();
        return Response::json(['collectors'=>$collectors,'status'=>200]);
    }

    /**
     * @OA\Get(
     *   path="/api/manufactures",
     *   tags={"Users"},
     *   summary="All manufactures",
     *   security={{"sanctum":{}}},
     *   @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *           @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *      ),
     *    @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *    @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *    @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *    @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *
     * ),
     */
    public function manufactures(){
        $manufactures = User::where('ismanufacture', true)->with('materials')->get();
        return Response::json(['manufactures' => $manufactures, 'status' => 200]);
    }


    /**
     * @OA\Get(
     *   path="/api/user/search/{location}",
     *   tags={"Users"},
     *   summary="search collector",
     *   security={{"sanctum":{}}},
     *   @OA\Parameter(
     *      name="location",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      ),
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/

    public function searchCollector($location){
        $location=strtolower($location);
        $result=User::where('iscollector',true)->where('location','like','%'.$location.'%')->get();
        return Response::json(['result'=>$result,'status'=>200],200);
    }

    /**
     * @OA\Put(
     *   path="/api/approve/{id}",
     *   tags={"Users"},
     *   summary="approve user account",
     *   security={{"sanctum":{}}},
     *   @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      ),
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function approve($id){
        $collector=User::find($id);
        if($collector->isapproved){
            $collector->isapproved=0;
            $collector->save();
            return Response::json(['message' => $collector->fname . '\'s accunt disapproved', 'status' => 201]);
        }else{
        $collector->isapproved=1;
        $collector->save();
        return Response::json(['message'=>$collector->fname. '\'s accunt approved','status'=>201]);
        }
    }
    /**
     * @OA\Delete(
     *   path="/api/user/delete/{id}",
     *   tags={"Users"},
     *   summary="delete user",
     *   security={{"sanctum":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function delete($id){
        $user=User::find($id);
        $user->delete();
        return Response::json(['message'=>'user deleted successfully','status'=>'200'],200);
    }
    
}
